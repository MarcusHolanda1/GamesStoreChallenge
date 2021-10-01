import Header from '../design/structures/Header/index'
import ContainerGlobal from '../design/structures/ContainerGlobal/index'
import Title from '../design/components/Title/Title'
import SelectPopularity from '../design/components/SelectPopularity'
import Card from '../design/components/Card'

export default function Home() {
    return (<>
        <Header/>
        <ContainerGlobal>
           <SelectPopularity></SelectPopularity>
           <Title></Title>
           <Card></Card>
           <Card></Card>
        </ContainerGlobal>
    </>
    )
}