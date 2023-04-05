import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Spin } from 'shared/ui';

export const withRouter = (component: () => React.ReactNode) => () =>
(
    <BrowserRouter>
        <Suspense fallback={<Spin />}>{component()}</Suspense>
    </BrowserRouter>
);
