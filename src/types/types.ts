 export enum UserRole {
    admin = "admin",
    teamMember = "teamMember"
 }

 export interface User {
    firstName: string
    lastName: string
    email: string
    id: string
    imageUrl?: string
    role: UserRole
}

export interface AdminUser extends User {
    preferredFirstName: string;
    company: {
        name: string;
        position: string;
    } | null;
}

export interface TeamMemberUser extends User {
    position: string;
    status: string;
    adminId: string;
}

export interface Task {
    id: string;
    title: string;
    description: string;
    due: Date;
    status: TaskStatus;
}

export type TaskStatus = "TODO" | "INPROGRESS" | "DONE";

export type TeamMemberStatus = "ACTIVE" | "INACTIVE" | "DEACTIVATED"

export enum AdminTeamMemberActions {
    edit = "edit",
    delete = "delete",
    reactivate = "reactivate",
    deactivate = "deactivate",
}

export type AdminTeamMemberStatusChange = "reactivate" | "deactivate";

export interface TeamMember {
    id: string;
    status: TeamMemberStatus;
    firstName: string;
    lastName: string;
    position: string;
    email: string;
    joinDate: Date;
}