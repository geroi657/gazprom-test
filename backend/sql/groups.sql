WITH GroupsData AS (
  SELECT id, caption
  FROM groups
),
NodesData AS (
  SELECT id, caption, status, interface, admin
  FROM nodes
),
GroupNodesData AS (
  SELECT id, node_id, group_id
  FROM groups_nodes
),
InterfacesData AS (
  SELECT id, caption, status
  FROM interfaces
),
StatusesData AS (
  SELECT Id, color, description
  FROM statuses
),
UsersData AS (
  SELECT id, firstname, lastname, email
  FROM users
),
ApplicationsData AS (
  SELECT id, caption
  FROM applications
),
NodesApplicationsData AS (
  SELECT node_id, caption
  FROM nodes_applications
  JOIN ApplicationsData ON nodes_applications.application_id = ApplicationsData.id
)

SELECT GroupNodesData.node_id AS "NodeID",
	   GroupNodesData.group_id AS "GroupID",
	   GroupsData.caption AS "GroupName",
	   NodesData.caption AS "NodeName",
	   NodesData.Status AS "NodeStatusCode",
	   StatusesData.color AS "NodeColor",
	   StatusesData.description AS "NodeStatusText",
	   InterfacesData.caption AS "InterfaceName",
	   InterfacesData.status AS "InterfaceStatusCode",
	   InterfaceStatuses.color AS "InterfaceColor",
	   InterfaceStatuses.description AS "InterfaceStatusText",
	   UsersData.firstname AS "LastName",
	   UsersData.lastname AS "FirstName",
	   UsersData.email AS "Email",
	   NodesApplicationsData.caption AS "ApplicationName"

FROM GroupNodesData
LEFT JOIN GroupsData ON GroupNodesData.group_id = GroupsData.id
LEFT JOIN NodesData ON GroupNodesData.node_id = NodesData.id
LEFT JOIN StatusesData ON StatusesData.Id = NodesData.status
LEFT JOIN InterfacesData ON NodesData.interface = InterfacesData.id
LEFT JOIN StatusesData AS InterfaceStatuses ON InterfacesData.status = InterfaceStatuses.Id
LEFT JOIN UsersData ON NodesData.admin = UsersData.id
LEFT JOIN NodesApplicationsData ON NodesApplicationsData.node_id = NodesData.id
