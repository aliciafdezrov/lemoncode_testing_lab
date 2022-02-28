import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import { ConfirmationDialogComponent } from './confirmation-dialog.component';

describe('common/DashboardComponent', () => {
  it('should be render empty when isOpen is false', () => {
    // Arrange
    const props = {
      isOpen: false,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Test dialog heading",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      }
    };

    // Act
    const { queryByRole } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(queryByRole('heading', {
      name: /test dialog heading/i
    })).toBe(null);
  });

  it('should be render as expected when passing required properties', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Test dialog heading",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      }
    };

    // Act
    const { getByRole } = render(<ConfirmationDialogComponent {...props} />);

    // Assert
    expect(getByRole('heading', {
      name: /test dialog heading/i
    })).toBeInTheDocument();
    expect(getByRole('button', {  name: /accept/i})).toBeInTheDocument();
    expect(getByRole('button', {  name: /close/i})).toBeInTheDocument();
  });

  it('should render children passed as props correctly', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Test dialog heading",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      }
    };

    // Act
    const { getByText } = render(
      <ConfirmationDialogComponent {...props}>
        <p>Am I a children from ConfirmationDialogComponent?</p>
    </ConfirmationDialogComponent>);

    // Assert
    expect(getByText(/am i a children from confirmationdialogcomponent\?/i)).toBeInTheDocument();
  });

  it('should call onClose method when clicking on close button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Test dialog heading",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      }
    };

    // Act
    const { getByRole } = render(
      <ConfirmationDialogComponent {...props}/>);
    const closeButton = getByRole('button', {  name: /close/i});
    fireEvent.click(closeButton);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onAccept and onClose methods when clicking on accept button', () => {
    // Arrange
    const props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: "Test dialog heading",
      labels: {
        closeButton: "Close",
        acceptButton: "Accept",
      }
    };

    // Act
    const { getByRole } = render(
      <ConfirmationDialogComponent {...props}/>);
    const acceptButton = getByRole('button', {  name: /accept/i});
    fireEvent.click(acceptButton);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });
});
