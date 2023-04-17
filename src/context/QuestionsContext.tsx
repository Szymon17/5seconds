import { FC, PropsWithChildren, createContext, useState } from "react";

type contextTypes = {
  questions: string[];
  setQuestions: (questions: string[]) => void;
};

export const QuestionsContext = createContext<contextTypes>({
  questions: [],
  setQuestions: () => null,
});

export const QuestionsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [questions, setQuestions] = useState<string[]>([]);

  const value = { questions, setQuestions };
  return <QuestionsContext.Provider value={value}>{children}</QuestionsContext.Provider>;
};
