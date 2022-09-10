import {Item, Icon} from 'semantic-ui-react';
const El = ({cell}) => {
    return (
        <Item.Group>
            <Item.Content>{cell.number}</Item.Content>
            <Item.Header>{cell.symbol}</Item.Header>
            <Item.Description>{cell.name}</Item.Description>
            <span className='ui fluid'>{cell.atomic_mass}</span><br/>
            <a href={cell.source} target='_blank' style={{'color':'blue'}}><Icon size='small' name='wikipedia w'/></a>
        </Item.Group>
    );
}

export default El;