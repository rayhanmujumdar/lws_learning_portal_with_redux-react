import React from 'react'
import AssignmentTable from '../../components/dashboard/assignment/AssignmentTable'
import MarkTable from '../../components/dashboard/assignmentMark/MarkTable'
import MarkStatus from '../../components/dashboard/assignmentMark/MarkStatus'

export default function AssignmentMark() {
  return (
    <section className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <div className="px-3 py-20 bg-opacity-10">
                <MarkStatus></MarkStatus>
                <div className="overflow-x-auto mt-4">
                    <MarkTable></MarkTable>
                </div>
            </div>
        </div>
    </section>
  )
}
