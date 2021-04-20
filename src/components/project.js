import React from 'react'

const Project = (props) => {
  return (
    <div className="flex flex-col bg-white h-40 rounded-2xl">
      <div className="p-5 flex-1 justify-end font-sans text-md text-gray-500">
        {props.desc}
      </div>
      <div className="bg-gray-100 flex flex-row rounded-b-2xl h-16">
        <img
          alt={props.title}
          src={require(`../assets/${props.icon.relativePath}`).default}
          className="w-8 h-8 self-center mx-4 rounded-full ring-2 ring-gray-300"
        />
        <div className="flex flex-row items-center">
          <span className="text-xl font-medium">{props.title}</span>
        </div>
      </div>
    </div>
  )
}

export default Project
