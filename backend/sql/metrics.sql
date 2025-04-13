WITH NodeGroups AS (
	SELECT node_id, group_id
	FROM groups_nodes
	JOIN groups ON groups_nodes.group_id = groups.id
)

SELECT nodes.id AS "NodeID",
	   NodeGroups.group_id AS "GroupID",
	   nodes.caption AS "NodeName",
	   metrics.datetime AS "DateTime",
	   metrics.cpu_utilization AS "CPU_Utilization",
	   metrics.memory_utilization AS "RAM_Utilization",
	   metrics.disk_utilization AS "Memory_Utilization"
FROM metrics
JOIN nodes ON metrics.node_id = nodes.id
JOIN NodeGroups ON nodes.id = NodeGroups.node_id

