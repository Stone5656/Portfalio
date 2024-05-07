function ProjectsPage() {
  return (
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <ul className="mt-5 space-y-4">
          <li className="p-4 shadow-lg">
            <h2 className="text-2xl font-semibold">Project 1</h2>
            <p className="mt-2">
              An innovative project designed to improve user experience on
              e-commerce platforms.
            </p>
          </li>
          <li className="p-4 shadow-lg">
            <h2 className="text-2xl font-semibold">Project 2</h2>
            <p className="mt-2">
              A mobile app developed to assist with daily productivity and task
              management.
            </p>
          </li>
        </ul>
      </div>
  );
}

export default ProjectsPage;