import React from 'react'

const index = () => {
    const ProvidersDetail = [
        {image : 'https://bit.ly/33HnjK0',
        name : 'Aliya ',
        id : 1,
        email : 'aliyyya@gmail.com',
        phone : '03003103010  ',
        description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
        portfolio : [ 
              {
                title : 'Portfolio 1',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 2',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 3',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              }
        ] 
        
    },
        {image : 'https://bit.ly/33HnjK0',
        name : 'Aliya ',
        id : 1,
        email : 'aliyyya@gmail.com',
        phone : '03003103010  ',
        description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
        portfolio : [ 
              {
                title : 'Portfolio 1',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 2',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 3',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              }
        ] 
        
    },
        {image : 'https://bit.ly/33HnjK0',
        name : 'Aliya ',
        id : 1,
        email : 'aliyyya@gmail.com',
        phone : '03003103010  ',
        description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
        portfolio : [ 
              {
                title : 'Portfolio 1',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 2',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 3',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              }
        ] 
        
    },
        {image : 'https://bit.ly/33HnjK0',
        name : 'Aliya ',
        id : 1,
        email : 'aliyyya@gmail.com',
        phone : '03003103010  ',
        description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
        portfolio : [ 
              {
                title : 'Portfolio 1',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 2',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              },
              {
                title : 'Portfolio 3',
                description : 'lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, reiciendis!',
                image : 'https://bit.ly/33HnjK0'
              }
        ] 
        
    }

    ]
  return (
    <div className='pb-10'>
        <h1 className="h2 font-bold capitalize text-gray-700 py-4">
        Service Provider Management
      </h1>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ProvidersDetail.map((provider, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-4">
              <div className="flex justify-center">
                <img src={provider.image} alt="profile" className="rounded-full h-20 w-20" />
              </div>
              <div className="text-center mt-4">
                <p className="text-xl text-gray-700 font-semibold">{provider.name}</p>
                <p className="text-gray-500 mt-2">{provider.email}</p>
                <p className="text-gray-500 mt-2">{provider.phone}</p>
                <p className="text-gray-500 mt-2">{provider.description}</p>
                <div className="mt-4">
                  <button className="text-lg text-white rounded-md bg-purple-500 px-3 active:bg-purple-800 font-bold  py-1">View Portfolio</button>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    
                  </div>
                </div>
              </div>
            </div>
          ))}


        </div>

         </div>
         </div>
  )
}

export default index