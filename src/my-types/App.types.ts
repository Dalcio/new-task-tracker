import { TTracker } from './Tracker.types';

export type TNotificationType =
  | 'add-task'
  | 'delete-task'
  | 'move-task'
  | 'assign-person'
  | 'collaborator';

export type TNotification = {
  id: string;
  title: string;
  kind: TNotificationType;
  desc: string;
  notifiedBy: string;
  // notifiedBy: TCollaborator;
  date: Date;
};

export type TCollaborator = {
  name: string;
  email: string;
};

export type TUser = TCollaborator & {
  username: string;
};

export type TWorkspace = {
  workspaceName: string;
  notifications: TNotification[];
  collaborators: TCollaborator[];
  tracker: TTracker;
};

export type TCurrentWorkspace = [string, number] | [];

export type TApp = {
  user: TUser | undefined;
  currentWorkspace: TCurrentWorkspace;
  workspaces: TWorkspace[];
};
