import React from 'react';
import { GraduationCap, Briefcase, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Academics',
    icon: <GraduationCap className="text-blue-600" />,
    tasksCount: 8,
  },
  {
    title: 'Career',
    icon: <Briefcase className="text-blue-600" />,
    tasksCount: 5,
  },
  {
    title: 'Well Being',
    icon: <Heart className="text-blue-600" />,
    tasksCount: 3,
  },
];

const tasks = [
  {
    id: 1,
    title: 'Submit Math Assignment',
    due: 'Tomorrow',
    category: 'Academics',
    icon: <GraduationCap className="text-blue-600" />,
  },
  {
    id: 2,
    title: 'Update Resume',
    due: 'Friday',
    category: 'Career',
    icon: <Briefcase className="text-blue-600" />,
  },
  {
    id: 3,
    title: 'Meditation Session',
    due: 'Today',
    category: 'Well Being',
    icon: <Heart className="text-blue-600" />,
  },
];

const TasksOverview = () => {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category, i) => (
          <div key={i} className="bg-white rounded-lg p-6 shadow-sm">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
              {category.icon}
            </div>
            <h2 className="text-xl font-semibold mb-2">{category.title}</h2>
            <p className="text-gray-600 mb-4">{category.tasksCount} tasks created</p>
            <div className="flex space-x-4">
              <Link
                to={`/category/${category.title.toLowerCase()}`}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                View
              </Link>
              <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                Add Task
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <h2 className="text-xl font-semibold">Filter Tasks</h2>
          <div className="flex space-x-2">
            {['All', 'Academics', 'Career', 'Well Being'].map((label) => (
              <button
                key={label}
                className={`px-4 py-2 rounded-lg ${label === 'All'
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <h2 className="text-xl font-semibold">Your Tasks</h2>
        <div className="space-y-4">
          {tasks.map((task) => (
            <Link
              key={task.id}
              to={`/task/${task.id}`}
              className="block bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                  {task.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{task.title}</h3>
                  <p className="text-gray-600">
                    Due: {task.due} | {task.category}
                  </p>
                </div>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TasksOverview;
