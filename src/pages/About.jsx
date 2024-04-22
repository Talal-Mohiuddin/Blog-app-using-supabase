import React from 'react'

const About = () => {
  return (
    <div className="p-3 flex flex-col gap-10">
      <h1 className="text-2xl font-bold">Welcome to Own the Yard</h1>
      <p className="text-xl">
        My name is Talal Mohiuddin. this is just a demo wensite of the original
        website.
        <a
          className="text-[#6191AC] font-bold"
          href="https://www.owntheyard.com/"
        >
          {" "}
          Own the Yard{" "}
        </a>
        your one stop site for all your backyard ideas, backyard product
        reviews, and a place to help you build the best backyard experience
        possible.
      </p>
      <p className="text-xl">
        So about 2 years ago, my family and I decided it was time to move. As
        you know, so many factors and decisions come into play when deciding to
        buy a new home.
      </p>
      <p className="text-xl">
        Well, we made the move and found a home with a backyard a few times
        larger than our previous yard…I was ecstatic! Now when I think my kids
        have been on the computer too long, you might often hear the phrase,
        “Hey, why don’t you go play out in the backyard?”
      </p>
      <p className="text-xl">
        Along the way, I’ve discovered that there are so many products,
        landscape ideas, tools, projects, and events that we consider for our
        backyard that I wanted to share a bit of my journey. My goal for the
        site is to share what I learn as I live the backyard life (whenever
        possible) and find the products, tools, or ideas that appear to be the
        best. Hopefully some of what I share will inspire you with design,
        landscape, or other ideas as well as help you make a more informed
        buying decisions to “stock up” your own yard. When I’m not working on
        this little “side project” of a website, you might find me publishing
        articles on my more business oriented blog here.
      </p>
    </div>
  );
}

export default About