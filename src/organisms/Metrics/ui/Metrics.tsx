import "./styles.scss"
import {useEffect, useRef, useState} from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";

export default function Metrics() {

    const chartRef = useRef<HTMLCanvasElement | null>(null);
    const chartInstanceRef = useRef<ChartJS | null>(null);

    const activeNode = useSelector((state : RootState) => state.nodeSelect.value);
    const nodeMetrics = useSelector((state : RootState) => state.data.value?.responseMetrics);

    const [activeFilter, setActiveFilter] = useState<string>("ЦПУ")
    const [activeMetric, setActiveMetric] = useState<number>(0)

    function handleFilterChange(filter : string, metricNumber : number) {
        setActiveFilter(filter);
        setActiveMetric(metricNumber);
    }

    useEffect(() => {

        if (nodeMetrics !== undefined) {

            const activeNodeDates : string[] = [];
            const activeNodeCPU : number[] = [];
            const activeNodeRAM : number[] = [];
            const activeNodeMEM : number[] = [];

            nodeMetrics.forEach((entry) => {
                if (entry.NodeID === activeNode) {
                    activeNodeDates.push(entry.DateTime);
                    activeNodeCPU.push(entry.CPU_Utilization);
                    activeNodeRAM.push(entry.RAM_Utilization);
                    activeNodeMEM.push(entry.Memory_Utilization);
                }
            });

            const metrics = [activeNodeCPU, activeNodeRAM, activeNodeMEM];

            const data = {
                labels: activeNodeDates,
                datasets: [
                    {
                        label: '',
                        data: metrics[activeMetric],
                        borderColor: '#3b82f6',
                        backgroundColor: 'rgba(59, 130, 246, 0.2)',
                        fill: true,
                        tension: 0.3,
                    },
                ],
            };

            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    title: {
                        display: true,
                        text: `Использование ${activeFilter}`,
                    },
                },
            };

            if (chartInstanceRef.current) {
                chartInstanceRef.current.destroy();
            }

            if (chartRef.current) {
                chartInstanceRef.current = new ChartJS(chartRef.current, {
                    type: 'line',
                    data: data,
                    options: options,
                });
            }

            return () => {
                if (chartInstanceRef.current) {
                    chartInstanceRef.current.destroy();
                }
            };
        }
    }, [nodeMetrics, activeNode, activeFilter]);

    return (
        <div className={"MetricsContainer"}>
            <canvas className="Metrics" ref={chartRef}></canvas>
            <div className={"Filters"}>
                <p className={"FilterP"}>Фильтрация:</p>
                <button className="Filter" onClick={ () => handleFilterChange("ЦПУ", 0) }>CPU</button>
                <button className="Filter" onClick={ () => handleFilterChange("ОЗУ", 1) }>RAM</button>
                <button className="Filter" onClick={ () => handleFilterChange("диска", 2) }>MEM</button>
            </div>
        </div>
    );
}
