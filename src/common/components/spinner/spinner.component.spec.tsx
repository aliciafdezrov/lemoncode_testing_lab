import * as React from 'react';
import {render} from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

let mockPromiseInProgress = false
jest.mock('react-promise-tracker', () => ({
  usePromiseTracker: () => ({ promiseInProgress: mockPromiseInProgress }),
}));

describe('common/SpinnerComponent', () => {
  it('should be render empty when react-promise-tracker returns false', () => {
    // Arrange
    mockPromiseInProgress = false;

    // Act
    const {queryByRole} = render(<SpinnerComponent/>);

    // Assert
    expect(queryByRole('presentation')).toBe(null);
  });

  it('should be render modal when react-promise-tracker returns true', () => {
    // Arrange
    mockPromiseInProgress = true;

    // Act
    const { getByRole } = render(<SpinnerComponent/>);

    // Assert
    expect(getByRole('presentation')).toBeInTheDocument();
  });
});
