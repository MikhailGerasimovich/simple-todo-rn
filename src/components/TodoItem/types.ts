export type TodoType = {
  title: string;
  description: string;
  isDone: boolean;
};

export type PressableTodoType = TodoType & {
  onPress: (title: string, description: string, isDone: boolean) => void;
  onLongPress: (title: string, description: string, isDone: boolean) => void;
  onPressCheckBox: () => void;
};
