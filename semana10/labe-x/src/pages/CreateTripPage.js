import React from 'react'
import styled from 'styled-components'


const ContainerTitle = styled.div`

h2{
    font-size: 50px;
    color: #E85887;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: center;
}
`

const CreateTripPage = () => {
    return(
        <ContainerTitle>
            <div>
        <h2>Create Trip</h2>
        </div>
        </ContainerTitle>
    )
}

export default CreateTripPage