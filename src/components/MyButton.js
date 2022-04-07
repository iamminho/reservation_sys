import Button from '@mui/material/Button';

const MyButton = ({text, type, onClick}) => {
    // type = secondary(nomal), success, error
    return (
        <Button  
            className={['MyButton',`Mybutton_${type}`].join(" ")}
            onClick = {onClick}
            variant = 'outlined'
            color={type}       
        >
        {text}
        </Button>
    );
};

MyButton.defaultProps = {
    type: "secondary"
};
export default MyButton;