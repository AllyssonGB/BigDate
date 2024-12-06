function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.style.display = 'none');

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    generateWordCloud();
    showPage('home');
    createMonthlySalesChart();
    createCustomerChart();
    createTopProductsChart();
    createSalesByRegionChart();
    createMarketingExpensesChart();
    createProductCategoryChart();
    createRevenueByRegionChart();
});

function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

function generateWordCloud() {
    const wordEntries = [
        { text: 'understand', size: 50 },
        { text: 'though', size: 48 },
        { text: 'school', size: 46 },
        { text: 'suggest', size: 44 },
        { text: 'newspaper', size: 42 },
        { text: 'then', size: 40 },
        { text: 'none', size: 38 },
        { text: 'standard', size: 36 },
        { text: 'audience', size: 34 },
        { text: 'state', size: 32 },
        { text: 'whom', size: 30 },
        { text: 'summer', size: 28 },
        { text: 'return', size: 26 },
        { text: 'idea', size: 25 },
        { text: 'religious', size: 24 },
        { text: 'test', size: 22 },
        { text: 'a', size: 20 },
        { text: 'to', size: 18 },
        { text: 'data', size: 16 },
        { text: 'little', size: 15 },
        { text: 'candidate', size: 14 },
        { text: 'door', size: 13 },
        { text: 'across', size: 12 },
        { text: 'mr', size: 50 },
        { text: 'blue', size: 48 },
        { text: 'bed', size: 46 },
        { text: 'quality', size: 44 },
        { text: 'television', size: 42 },
        { text: 'want', size: 40 },
        { text: 'event', size: 38 },
        { text: 'majority', size: 36 },
        { text: 'about', size: 34 },
        { text: 'eat', size: 32 },
        { text: 'town', size: 30 },
        { text: 'buy', size: 28 },
        { text: 'later', size: 26 },
        { text: 'development', size: 25 },
        { text: 'allow', size: 24 },
        { text: 'marriage', size: 22 },
        { text: 'one', size: 20 },
        { text: 'arrive', size: 18 },
        { text: 'garden', size: 16 },
        { text: 'contain', size: 15 },
        { text: 'street', size: 14 },
        { text: 'offer', size: 50 },
        { text: 'use', size: 48 },
        { text: 'page', size: 46 },
        { text: 'she', size: 44 },
        { text: 'care', size: 42 },
        { text: 'while', size: 40 },
        { text: 'dream', size: 38 },
        { text: 'ground', size: 36 },
        { text: 'address', size: 34 },
        { text: 'from', size: 32 },
        { text: 'something', size: 30 },
        { text: 'only', size: 28 },
        { text: 'heart', size: 26 },
        { text: 'study', size: 25 },
        { text: 'material', size: 24 },
        { text: 'evidence', size: 22 },
        { text: 'begin', size: 20 },
        { text: 'generation', size: 18 },
        { text: 'together', size: 16 },
        { text: 'eye', size: 15 },
        { text: 'wish', size: 14 },
        { text: 'executive', size: 50 },
        { text: 'week', size: 48 },
        { text: 'paper', size: 46 },
        { text: 'baby', size: 44 },
        { text: 'century', size: 42 },
        { text: 'finally', size: 40 },
        { text: 'partner', size: 38 },
        { text: 'evening', size: 36 },
        { text: 'officer', size: 34 },
        { text: 'play', size: 32 }
    ];

    const layout = d3.layout.cloud()
        .size([800, 400])
        .words(wordEntries)
        .padding(5)
        .rotate(() => 0)
        .fontSize(d => d.size)
        .on('end', drawWordCloud);

    layout.start();

    function drawWordCloud(words) {
        d3.select('#wordCloud').html('');
        d3.select('#wordCloud').append('svg')
            .attr('width', 800)
            .attr('height', 400)
            .append('g')
            .attr('transform', 'translate(400,200)')
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-size', d => d.size + 'px')
            .style('fill', () => 'hsl(' + Math.random() * 360 + ',100%,50%)')
            .attr('text-anchor', 'middle')
            .attr('transform', d => 'translate(' + [d.x, d.y] + ')')
            .text(d => d.text);
    }
}

function createMonthlySalesChart() {
    const salesByMonth = {
        'Janeiro': 150,
        'Fevereiro': 120,
        'Março': 180,
        'Abril': 140,
        'Maio': 170,
        'Junho': 160,
        'Julho': 190,
        'Agosto': 130,
        'Setembro': 175,
        'Outubro': 155,
        'Novembro': 200,
        'Dezembro': 185
    };

    const labels = Object.keys(salesByMonth);
    const values = Object.values(salesByMonth);

    const ctx = document.getElementById('exploratoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Distribuição de vendas por mês',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createCustomerChart() {
    const customersByMonth = {
        'Janeiro': 100,
        'Fevereiro': 90,
        'Março': 110,
        'Abril': 95,
        'Maio': 120,
        'Junho': 105,
        'Julho': 130,
        'Agosto': 85,
        'Setembro': 125,
        'Outubro': 115,
        'Novembro': 140,
        'Dezembro': 135
    };

    const labels = Object.keys(customersByMonth);
    const values = Object.values(customersByMonth);

    const ctx = document.getElementById('customerChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantitativo de clientes por mês',
                data: values,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createTopProductsChart() {
    const productsData = {
        'Laptop': 300,
        'Smartphone': 250,
        'Tablet': 200,
        'Smartwatch': 180,
        'Monitor': 150,
        'Teclado Mecânico': 140,
        'Mouser Gamer': 130,
        'Fone de Ouvido Bluethoot': 120,
        'SSD NVMe': 110,
        'Placa de Video': 100
    };

    const labels = Object.keys(productsData);
    const values = Object.values(productsData);

    const ctx = document.getElementById('topProductsChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Produtos mais vendidos',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            indexAxis: 'x',
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    ticks: {
                        autoSkip: false,
                        maxRotation: 45,
                        minRotation: 45
                    }
                }
            }
        }
    });
}

function createSalesByRegionChart() {
    const salesByRegion = {
        'Norte': 120,
        'Nordeste': 300,
        'Centro-Oeste': 150,
        'Sudeste': 400,
        'Sul': 220
    };

    const labels = Object.keys(salesByRegion);
    const values = Object.values(salesByRegion);

    const ctx = document.getElementById('salesByRegionChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Número de vendas por região',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createMarketingExpensesChart() {
    const marketingExpensesByRegion = {
        'Norte': 50000,
        'Nordeste': 120000,
        'Centro-Oeste': 80000,
        'Sudeste': 200000,
        'Sul': 100000
    };

    const labels = Object.keys(marketingExpensesByRegion);
    const values = Object.values(marketingExpensesByRegion);

    const ctx = document.getElementById('marketingExpensesChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Gasto de Marketing por Região (R$)',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createProductCategoryChart() {
    const productsByCategory = {
        'Gabinetes': 450,
        'Celulares': 300,
        'Monitores': 500,
        'Periféricos': 200,
        'Placas': 350
    };

    const labels = Object.keys(productsByCategory);
    const values = Object.values(productsByCategory);

    const ctx = document.getElementById('productCategoryChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Quantidade de produtos vendidos por categoria',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}

function createRevenueByRegionChart() {
    const revenueByRegion = {
        'Norte': 300000,
        'Nordeste': 700000,
        'Centro-Oeste': 450000,
        'Sudeste': 1000000,
        'Sul': 550000
    };

    const labels = Object.keys(revenueByRegion);
    const values = Object.values(revenueByRegion);

    const ctx = document.getElementById('revenueByRegionChart').getContext('2d');
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Receita por Região (R$)',
                data: values,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            }
        }
    });
}



