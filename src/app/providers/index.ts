import compose from 'compose-function';
import { withRouter } from './with-router';
import { withStore } from './with-store';
import { withWrapper } from './with-wrapper';

export const withProviders = compose(withRouter, withStore, withWrapper);
