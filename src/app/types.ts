type group = {
    ApplicationName: string
    Email: string
    FirstName: string
    GroupID: number
    GroupName: string
    InterfaceColor: string
    InterfaceName: string
    InterfaceStatusCode: string
    InterfaceStatusText: string
    LastName: string
    NodeColor: string
    NodeID: number
    NodeName: string
    NodeStatusCode: number
    NodeStatusText : string
}

type metric = {
    CPU_Utilization: number
    DateTime: string
    GroupID: number
    Memory_Utilization: number
    NodeID: number
    NodeName: string
    RAM_Utilization: number
}

export type actionType = {
    responseGroups: group[]
    responseMetrics: metric[]
}