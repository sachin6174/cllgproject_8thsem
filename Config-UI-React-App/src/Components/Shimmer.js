let Shimmer = (props) => {

    let sizeArray=[];
    for(let i=0;i<15;i++){
        sizeArray.push(i)
    }

    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mx-3 gap-2 ">
        {
            sizeArray.map((item)=>{
                return(
                    <div key={item} className="p-32  m-2 bg-gray-600 animate-pulse text-gray-600 rounded-xl">
                    
                </div>
                    )
            })
        }
        </div>

        </>
    )
};

export default Shimmer;
