<template>
	<article>
	  <div class="report-container" id="report">
		<!-- Graph Section -->
		<canvas id="transactionChart" class="mt-8"></canvas>
  
		<!-- Table Section -->
		<table class="table-auto w-full mt-4 bg-white border-collapse border border-gray-300">
		  <thead>
			<tr class="bg-gray-100">
			  <th class="border border-gray-300 px-4 py-2">Month</th>
			  <th class="border border-gray-300 px-4 py-2">Total Transactions</th>
			</tr>
		  </thead>
		  <tbody>
			<tr v-for="(transaction, index) in monthlyTransactions" :key="index">
			  <td class="border border-gray-300 px-4 py-2">{{ transaction.monthYear }}</td>
			  <td class="border border-gray-300 px-4 py-2">{{ transaction.count }}</td>
			</tr>
		  </tbody>
		</table>
	  </div>
  
	  <!-- Download Buttons -->
	  <div class="flex justify-center space-x-4 mt-6">
		<button @click="downloadPDF" class="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
		  Download PDF
		</button>
		<button @click="downloadExcel" class="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">
		  Download Excel
		</button>
	  </div>
	</article>
  </template>
  
  <script>
  import { Chart, registerables } from 'chart.js';
  import html2canvas from 'html2canvas';
  import jsPDF from 'jspdf';
  import * as XLSX from 'xlsx';
  import { useDailyTransactionStore } from "../../../stores/daily_transaction.store";
  
  export default {
	data() {
	  return {
		dailyTransactionStore: useDailyTransactionStore(),
		chartInstance: null,
		monthlyTransactions: [],
		dailyTransactions: []  // Adding daily transaction data
	  };
	},
	mounted() {
	  this.fetchData();
	},
	methods: {
	  async fetchData() {
		try {
		  await this.dailyTransactionStore.fetch();
		  this.updateTableData();
		  this.renderChart();
		} catch (error) {
		  console.error('Error fetching data:', error);
		}
	  },
	  processChartData() {
		const transactions = this.dailyTransactionStore.daily_transactions.latestTransactions;
		const labels = transactions.map(tx => tx.date).reverse();
		const data = transactions.map(tx => parseInt(tx.transaction)).reverse();
  
		return { labels, data };
	  },
	  renderChart() {
		Chart.register(...registerables);
  
		const ctx = document.getElementById('transactionChart').getContext('2d');
		const { labels, data } = this.processChartData();
  
		const backgroundColors = labels.map(() => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`);
		const borderColors = backgroundColors.map(color => color.replace('0.5', '1'));
  
		if (this.chartInstance) {
		  this.chartInstance.destroy();
		}
  
		this.chartInstance = new Chart(ctx, {
		  type: 'bar',
		  data: {
			labels: labels,
			datasets: [{
			  label: 'Total Transactions',
			  data: data,
			  backgroundColor: backgroundColors,
			  borderColor: borderColors,
			  borderWidth: 1
			}]
		  },
		  options: {
			scales: {
			  y: {
				beginAtZero: true
			  }
			}
		  }
		});
	  },
	  updateTableData() {
		this.monthlyTransactions = this.dailyTransactionStore.daily_transactions.monthlyCounts.map(item => ({
		  monthYear: item.monthYear,
		  count: item.totalTransaction
		}));
  
		// Storing daily transactions data
		this.dailyTransactions = this.dailyTransactionStore.daily_transactions.latestTransactions.map(item => ({
		  date: item.date,
		  count: item.transaction
		}));
	  },
	  async downloadPDF() {
		try {
		  // Select the section to capture
		  const reportElement = document.getElementById('report');
  
		  // Capture the section as an image
		  const canvasData = await html2canvas(reportElement);
		  const imgData = canvasData.toDataURL('image/png');
  
		  // Create a new PDF document
		  const pdf = new jsPDF('p', 'mm', 'a4');
  
		  // Add the captured image to the PDF
		  pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
  
		  // Save the PDF
		  pdf.save('transaction_report.pdf');
		} catch (error) {
		  console.error('Error downloading PDF:', error);
		}
	  },
	  downloadExcel() {
		/* Data Preparation for Monthly Transactions */
		const monthlyData = [
		  ['Month', 'Total Transactions'], // Header row
		  ...this.monthlyTransactions.map(tx => [tx.monthYear, tx.count])
		];
  
		/* Data Preparation for Daily Transactions */
		const dailyData = [
		  ['Date', 'Transactions'], // Header row
		  ...this.dailyTransactions.map(tx => [tx.date, tx.count])
		];
  
		/* Create Worksheet */
		const monthlySheet = XLSX.utils.aoa_to_sheet(monthlyData);
		const dailySheet = XLSX.utils.aoa_to_sheet(dailyData);
  
		/* Create Workbook */
		const wb = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(wb, monthlySheet, 'Monthly Report');
		XLSX.utils.book_append_sheet(wb, dailySheet, 'Daily Report');
  
		/* Generate and Download Excel File */
		XLSX.writeFile(wb, 'transaction_report.xlsx');
	  }
	}
  };
  </script>
  
  <style scoped>
  .report-container {
	padding: 20px;
	background-color: #f4f4f9;
  }
  
  canvas {
	max-width: 100%;
	height: auto;
  }
  
  table {
	margin-top: 20px;
	width: 100%;
	border-collapse: collapse;
  }
  
  th, td {
	border: 1px solid #ccc;
	padding: 8px;
	text-align: center;
  }
  
  th {
	background-color: #eaeaea;
  }
  
  .bg-blue-600 {
	background-color: #007BFF;
  }
  
  .bg-green-600 {
	background-color: #28a745;
  }
  </style>
  