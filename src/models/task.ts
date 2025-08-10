export const TASK_KEY = "tasks";

export enum TaskStatus {
  Creating = "CREATING",
  Created = "CREATED",
};

export interface Task {
  id: string;
  title: string;
  isConcluded: boolean;
  status?: TaskStatus;
}