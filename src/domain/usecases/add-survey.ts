interface SurveyAnswer {
  image: string
  answer: string
}

interface AddSurveyModel {
  question: string
  answers: SurveyAnswer[]
}

interface AddSurvey {
  add: (data: AddSurveyModel) => Promise<void>
}

export { AddSurvey, AddSurveyModel }
