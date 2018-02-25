import * as React from 'react';
import { Divider, Grid, Header, Icon } from 'semantic-ui-react';

export const Footer = props => {
  return (
    <div className={'footer'}>
      <Grid className={'noDistances'} columns={2} inverted divided>
        <Grid.Row>
          <Grid.Column width={13} textAlign={'left'}>
            <Header size={'small'} inverted>
              Fan Content Policy
            </Header>
            <span>
              This content is not affiliated with, endorsed, sponsored, or
              specifically approved by Supercell and Supercell is not
              responsible for it. For more information see
            </span>
            <p>
              <a
                href={'http://www.supercell.com/fan-content-policy'}
                target={'_blank'}
              >
                Supercell’s Fan Content Policy
              </a>
            </p>
            <Divider />
            Icon (Dice) made by{' '}
            <a
              href={'https://www.flaticon.com/authors/dimi-kazak'}
              target={'_blank'}
            >
              Dimi Kazak
            </a>{' '}
            from www.flaticon.com
          </Grid.Column>
          <Grid.Column width={3}>
            <a href={'https://github.com/nerdysteve'} target={'_blank'}>
              <Icon className={'.icon'} inverted size={'big'} name={'github'} />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
};
