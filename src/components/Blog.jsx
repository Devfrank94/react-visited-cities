

const posts = [
  {
    "id": 1,
    "title": "Boost your conversion rate",
    "href": "#",
    "description": "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    "date": "Mar 16, 2020",
    "datetime": "2020-03-16",
    "category": { "title": "Marketing", "href": "#" },
    "author": {
      "name": "Michael Foster",
      "role": "Co-Founder / CTO",
      "href": "#",
      "imageUrl": "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    "id": 2,
    "title": "Improve your SEO ranking",
    "href": "#",
    "description": "Deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident. Similique sunt in culpa qui officia deserunt mollitia animi.",
    "date": "Apr 10, 2021",
    "datetime": "2021-04-10",
    "category": { "title": "SEO", "href": "#" },
    "author": {
      "name": "Sarah Connor",
      "role": "Head of SEO",
      "href": "#",
      "imageUrl": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
    }
  },
  {
    "id": 3,
    "title": "Maximize your social media impact",
    "href": "#",
    "description": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
    "date": "May 5, 2022",
    "datetime": "2022-05-05",
    "category": { "title": "Social Media", "href": "#" },
    "author": {
      "name": "John Doe",
      "role": "Social Media Manager",
      "href": "#",
      "imageUrl": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGhvdG8lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=facearea&facepad=2&w=500&h=700&q=80"
    }
  },
  {
    "id": 4,
    "title": "Streamline your content strategy",
    "href": "#",
    "description": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit.",
    "date": "Jun 20, 2023",
    "datetime": "2023-06-20",
    "category": { "title": "Content Strategy", "href": "#" },
    "author": {
      "name": "Alice Johnson",
      "role": "Content Strategist",
      "href": "#",
      "imageUrl": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG8lMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=facearea&facepad=2&w=600&h=700&q=80"
    }
  },
  {
    "id": 5,
    "title": "Enhance customer engagement",
    "href": "#",
    "description": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "date": "Jul 12, 2024",
    "datetime": "2024-07-12",
    "category": { "title": "Customer Engagement", "href": "#" },
    "author": {
      "name": "Robert Smith",
      "role": "Customer Success Manager",
      "href": "#",
      "imageUrl": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=facearea&facepad=2&w=800&h=800&q=80"
    }
  },
]

function Blog() {
  return (
    <>
    <div className="py-20 mx-5 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 my-5 p-5 backdrop-blur-sm bg-slate-300 rounded-md shadow-lg">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-900/75">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between backdrop-blur-sm bg-white/60 rounded-xl shadow-lg p-5">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-600/75">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600/75 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600/75">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600/75">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}

export default Blog;