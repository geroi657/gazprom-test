export async function getAPI() {

    const responseGroups = await fetch("/api/groups", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    const responseMetrics = await fetch("/api/metrics", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!responseGroups.ok) {
        throw new Error("Failed to fetch Groups");
    }
    if(!responseMetrics.ok) {
        throw new Error("Failed to fetch Metrics");
    }

    const [groupsData, metricsData] = await Promise.all([
        responseGroups.json(),
        responseMetrics.json()
    ]);

    return {
        responseGroups: groupsData,
        responseMetrics: metricsData
    };
}