import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('useConfirmationDialog specs', () => {
  it('should return the default state', () => {
    // Arrange

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    const defaultLookup: Lookup = { id: '', name: '' };
    expect(result.current.itemToDelete).toEqual(defaultLookup);
    expect(result.current.isOpen).toEqual(false);
    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update itemToDelete and isOpen when it calls onOpenDialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(newItemToDelete);
    expect(result.current.isOpen).toEqual(true);
  });

  it('should set isOpen to false when calling onClose after opening the dialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act step 1
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert step 1
    expect(result.current.isOpen).toEqual(true);

    // Act step 2
    act(() => {
      result.current.onClose();
    });

    // Assert step 2
    expect(result.current.isOpen).toEqual(false);
  });

  it('should reset itemToDelete when calling onAccept after opening the dialog', () => {
    // Arrange
    const newItemToDelete: Lookup = { id: 'test id', name: 'test name' };

    // Act step 1
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(newItemToDelete);
    });

    // Assert step 1
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(newItemToDelete);

    // Act step 2
    act(() => {
      result.current.onAccept();
    });

    // Assert step 2
    const expectedItemToDelete: Lookup = { id: '', name: '' };
    expect(result.current.isOpen).toEqual(true);
    expect(result.current.itemToDelete).toEqual(expectedItemToDelete);
  });
});
