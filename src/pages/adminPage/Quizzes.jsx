import React from 'react'
import QuizzesTable from '../../components/dashboard/quizzes/QuizzesTable'

export default function Quizzes() {
  return (
    <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button className="btn ml-auto">Add Quiz</button>
                </div>
                <div className="overflow-x-auto mt-4">
                    <QuizzesTable></QuizzesTable>
                </div>
            </div>
        </div>
    </section>
  )
}
