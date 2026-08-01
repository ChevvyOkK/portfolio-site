export type EducationEntry = {
  title: string;
  institution: string;
  period: string;
  description?: string;
};

// TODO: заполнить реальными данными перед публикацией страницы /about (шаг 7).
// Оставлено пустым намеренно — придумывать образование за пользователя нельзя.
export const EDUCATION: EducationEntry[] = [];
