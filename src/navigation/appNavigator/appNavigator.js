import { NavigationContainer } from '@react-navigation/native';
import { TabNavigation } from '../tabNavigation/tabNavigation';

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export { AppNavigator };
