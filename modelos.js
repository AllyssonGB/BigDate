document.addEventListener('DOMContentLoaded', () => {
    // Primeiro gráfico: Forecast Chart
    const vendasHistoricoRegiao = [422, 451, 453, 573, 478, 260];
    const vendasPrevisaoRegiao = [520, 550, 570, 590, 600, 620];
    const mesesHistorico = ['May 2024', 'Jun 2024', 'Jul 2024', 'Aug 2024', 'Sep 2024', 'Oct 2024'];
    const mesesPrevisao = ['Nov 2024', 'Dec 2024', 'Jan 2025', 'Feb 2025', 'Mar 2025', 'Apr 2025'];

    const rotulosCombinadosVendas = mesesHistorico.concat(mesesPrevisao);
    const vendasCombinadasRegiao = vendasHistoricoRegiao.concat(vendasPrevisaoRegiao);

    const forecastChartElement = document.getElementById('forecastChart');
    if (forecastChartElement) {
        const ctx = forecastChartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: rotulosCombinadosVendas,
                datasets: [
                    {
                        label: 'Vendas por Região (Histórico e Previsão)',
                        data: vendasCombinadasRegiao,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        fill: false,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Vendas por Região e Previsão para os Próximos Meses'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Mês'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Quantidade Vendida'
                        }
                    }
                }
            }
        });
    }

    // Segundo gráfico: Sales Forecast Chart
    const productData = [
        { name: 'Produto 12', data: [13.0, 17.67, 21.0, 20.0, 15.67, 20.33] },
        { name: 'Produto 9', data: [10.67, 8.67, 17.33, 24.0, 26.0, 29.0] },
        { name: 'Produto 5', data: [25.0, 26.67, 12.67, 12.67, 5.67, 8.0] },
        { name: 'Produto 3', data: [13.0, 8.33, 15.33, 17.67, 24.67, 22.33] },
        { name: 'Produto 8', data: [22.33, 17.0, 24.33, 19.0, 16.0, 8.33] },
        { name: 'Produto 1', data: [17.0, 9.33, 10.67, 16.33, 21.67, 23.33] },
        { name: 'Produto 11', data: [9.0, 12.0, 19.67, 19.33, 19.33, 18.67] },
        { name: 'Produto 6', data: [21.0, 16.0, 17.0, 21.0, 24.33, 22.0] },
        { name: 'Produto 7', data: [22.33, 22.33, 16.0, 16.67, 19.67, 23.0] },
        { name: 'Produto 10', data: [11.67, 13.67, 18.67, 23.0, 41.33, 39.33] }
    ];

    const graficoVendasFuturoElement = document.getElementById('graficoVendasFuturo');
    if (graficoVendasFuturoElement) {
        const ctx = graficoVendasFuturoElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
                datasets: productData.map(product => ({
                    label: product.name,
                    data: product.data,
                    borderColor: getRandomColor(),
                    fill: false,
                    tension: 0.1
                }))
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Previsão de Vendas para os Próximos 6 Meses - Top 10 Produtos Mais Vendidos'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Meses (1 = Próximo Mês)'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Quantidade Vendida'
                        }
                    }
                }
            }
        });
    }

    // Terceiro gráfico: Investment Chart
    const investmentData = [
        { name: 'Centro-Oeste', data: [0.0, 18333.31, 42705.64, 29593.97, 0.0, 0.0] },
        { name: 'Nordeste', data: [0.0, 0.0, 78802.06, 87411.74, 38973.95, 49008.34] },
        { name: 'Norte', data: [0.0, 38700.24, 17561.97, 10388.81, 0.0, 3491.71] },
        { name: 'Sudeste', data: [51218.78, 9212.04, 36119.41, 20762.42, 137801.45, 67022.26] },
        { name: 'Sul', data: [7147.81, 84907.57, 133486.47, 45541.68, 74040.88, 0.0] }
    ];

    const investmentChartElement = document.getElementById('investmentChart');
    if (investmentChartElement) {
        const ctx = investmentChartElement.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['2025-01', '2025-02', '2025-03', '2025-04', '2025-05', '2025-06'],
                datasets: investmentData.map(region => ({
                    label: region.name,
                    data: region.data,
                    borderColor: getRandomColor(),
                    fill: false,
                    tension: 0.1
                }))
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Investimento em Marketing para os Próximos 6 Meses'
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Mês'
                        },
                        ticks: {
                            maxRotation: 45,
                            minRotation: 45
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Investimento Necessário em Reais'
                        }
                    }
                }
            }
        });
    }
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

    // Terceiro gráfico: Most evaluated products in the next six months


document.addEventListener('DOMContentLoaded', () => {
    const productData = [
        { name: 'Gabinete Gamer', data: [35, 30, 32, 36, 31, 34] },
        { name: 'Teclado Mecânico', data: [20, 20, 20, 20, 20, 20] },
        { name: 'Memória RAM', data: [15, 12, 14, 16, 13, 15] },
        { name: 'Impressora 3D', data: [10, 9, 8, 12, 11, 10] },
        { name: 'Mouse Gamer', data: [18, 17, 16, 19, 18, 17] },
        { name: 'Drone', data: [8, 6, 7, 9, 8, 7] },
        { name: 'SSD NVMe', data: [6, 5, 6, 7, 6, 5] },
        { name: 'Roteador Wi-Fi', data: [12, 14, 13, 15, 13, 14] },
        { name: 'Smartwatch', data: [9, 8, 9, 10, 9, 8] },
        { name: 'Mouse Gamer', data: [5, 4, 5, 6, 5, 4] }
    ];

    const ctx = document.getElementById('produtostop10').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Mês 1', 'Mês 2', 'Mês 3', 'Mês 4', 'Mês 5', 'Mês 6'],
            datasets: productData.map(product => ({
                label: product.name,
                data: product.data,
                borderColor: getRandomColor(),
                fill: false,
                tension: 0.1
            }))
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Previsão de Vendas para os Próximos 6 Meses - Top 10 Produtos Mais Vendidos'
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Meses (1 = Próximo Mês)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Quantidade Vendida'
                    }
                }
            }
        }
    });
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}