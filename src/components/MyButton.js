import Button from '@mui/material/Button';

const MyButton = ({text, type, onClick}) => {
    const btnType = ['success', 'error'].includes(type)? type:'secondary';
    // type = secondary(nomal), success, error
    return (
        <Button  
            className={['MyButton',`Mybutton_${btnType}`].join(" ")}
            onClick = {onClick}
            variant = 'outlined'
            color={btnType}       
        >
        {text}
        </Button>
    );
};

MyButton.defaultProps = {
    type: "secondary"
};
export default MyButton;