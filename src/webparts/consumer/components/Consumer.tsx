import * as React from 'react';
import styles from './Consumer.module.scss';
import { IConsumerProps } from './IConsumerProps';
import { useCustomState } from '../../useCustomState';
import { useState } from 'react';

interface IState {
  FirstName?: string;
  LastName?: string;
  FullName?: string;
}

const Consumer: React.FunctionComponent<IConsumerProps> = (props: IConsumerProps) => {

  const initialState: IState = {
    FirstName: 'Vardhaman',
    LastName: ''
  };

  const [state, setState] = useState<IState>(initialState);
  const [customState, setCustomState, setCustomStateDispatch] = useCustomState<IState>(initialState);


  React.useEffect(() => {

    //Using the default useState hook replaces state object with the new object.
    setState({
      LastName: 'Deshpande'
    });

    //Using our custom hook will merge the previous state object with new object mimicking a class components setState behavior
    setCustomState({
      LastName: 'Deshpande'
    });

  }, []);

  // const initialState: IState = {
  //   FirstName: 'Vardhaman',
  //   LastName: 'Deshpande'
  // };

  // React.useEffect(() => {

  //   setCustomStateDispatch((prevState: IState): IState => {
  //     return { ...prevState, FullName: `${prevState.FirstName} ${prevState.LastName}`  };
  //   });

  // }, []);

  //Run anytime the userState changes. 
  React.useEffect(() => {
    console.log({ state });
  }, [state]);

  //Run anytime the customUserState changes. 
  React.useEffect(() => {
    console.log({ customState });
  }, [customState]);

  return (
    <div className={styles.consumer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>SPFx react hooks custom state demo</span>
            <p className={styles.subTitle}>Open Developer tool to see the console logs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consumer;
