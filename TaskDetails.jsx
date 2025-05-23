import React from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Edit } from "lucide-react";

const TaskDetails = () => {
  const { id } = useParams();

  const acceptanceCriteria = [
    "User can sign up with email",
    "Welcome email sent after signup",
    "Onboarding tour is skippable",
  ];

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <Link to="/" className="hover:text-gray-900">
          Tasks
        </Link>
        <ChevronRight size={16} />
        <span className="text-gray-800 font-medium">Task Details</span>
      </div>
      <h1 className="text-xl font-bold">Task Overview</h1>

      <div className="shadow-sm p-6 space-y-6">
        <div>
          <div className="">
            <div className="w-12 h-12 mb-6 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>

            <div className="flex-1">
              <h2 className="text-2xl font-semibold mb-3">Update onboarding flow</h2>
              <h5 className="text-gray-600 text-sm h-8">
                Improve the onboarding experience for new users by streamlining steps and clarifying instructions.
              </h5>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-2">Status</h2>
          <select className="w-full p-2 rounded-lg">
            <option>In Progress</option>
            <option>Completed</option>
            <option>On Hold</option>
          </select>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Assignee & Dates</h2>
          <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
              <div>
                <p className="font-medium">Priya Sharma</p>
                <p className="text-sm text-gray-600">Product Designer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Start Date</label>
              <input
                type="date"
                defaultValue="2024-06-01"
                className="w-full p-2 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">End Date</label>
              <input
                type="date"
                defaultValue="2024-06-15"
                className="w-full p-2 rounded-lg"
              />
            </div>
          </div>
        </div>


        <div>
          <h2 className="text-lg font-medium mb-4">Acceptance Criteria</h2>
          <div className="space-y-3">
            {acceptanceCriteria.map((criterion, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <input type="checkbox" className="w-5 h-5 rounded" />
                  <span>{criterion}</span>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Edit size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-medium mb-4">Comments</h2>
          <textarea
            placeholder="Write your comment here..."
            className="w-full h-32 p-3 rounded-lg resize-none"
          />
          <button className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetails;
