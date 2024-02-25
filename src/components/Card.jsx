

function Card({ username = "Yash", post = "Not asigned yet" }) {
    // console.log(props);
    return (
        <div>
            <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
                <img className="w-24 h-24 rounded-full mx-auto" src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzc4NThsYXZuMW45ZDhja3Fjd254ODN6Z2FzbW8yOWo2Z2NpejFubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/UUZv8FkyVke9OYv16e/giphy.gif" alt="Scam alert" width="384" height="512" />
                <div className="pt-6  space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, magnam.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card