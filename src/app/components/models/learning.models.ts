export interface LearningListItem {
  id: string;
  topic: string;
  competency: string;
  notes?: string;
}

export interface LearningItemCreate {
  topic: string;
  competency: string;
  notes?: string;
}
