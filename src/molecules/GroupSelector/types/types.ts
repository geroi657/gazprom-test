export type entryType = {
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

export type groupType = {
    [GroupID : string]: string
}