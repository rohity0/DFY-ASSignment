

export const HandleInput  = ({handleFileInput})=>{
    return(
        <>
        
        <input style={{border: "1px solid red", zIndex:1000}} type="file" onChange={handleFileInput} accept=".geojson" />
        </>
    )
}