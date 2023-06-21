import {render, Text, BlockStack, Link} from '@shopify/checkout-ui-extensions-react';

render('Checkout::Contact::RenderAfter', () => <App />);

function App() {
  return (
    
    <BlockStack inlineAlignment="center">
    
      <Text>By continuing, you agree to the <Link to="https://thinlizzy.com.au/pages/terms-conditions">Thinlizzy.com.au</Link> 
        Terms and Conditions and Privacy Policy and to 
        receiving marketing communications 
        from <Link to="https://thinlizzy.com.au/pages/privacy-policy">Thinlizzy.com.au</Link> </Text>
      
    </BlockStack>
  );
}
