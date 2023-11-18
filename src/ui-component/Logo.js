// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';

// material-ui
// import { ButtonBase, Typography } from '@mui/material';
import { Typography } from '@mui/material';

// project imports
// import config from 'config';
// import Logo from 'ui-component/Logo';
// import { MENU_OPEN } from 'store/actions';
import logo from 'assets/images/logo.png';

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  // const defaultId = useSelector((state) => state.customization.defaultId);
  // const dispatch = useDispatch();
  return (
    <span>
      <img src={logo} alt="SaferBridge" height="40" style={{marginRight: 10 + 'px'}} />
      {/* <ButtonBase disableRipple onClick={() => dispatch({ type: MENU_OPEN, id: defaultId })} component={Link} to={config.defaultPath}> */}
        {/* <Logo /> */}
        <Typography variant="h1" style={{display: 'inline-block'}}>
          SaferBridge
        </Typography>
      {/* </ButtonBase> */}
    </span>
  );
};

export default LogoSection;
