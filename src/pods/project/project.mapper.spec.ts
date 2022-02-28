import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mappers', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result but feeding null employees list', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: null,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result but feeding undefined employees list', () => {
    // Arrange
    const employee: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: undefined,
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(employee);

    // Assert
    expect(result).toEqual(expectedResult);
  });

  it('should return expected result feeding correct values', () => {
    // Arrange
    const project: apiModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test employee name',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: 'test id',
      name: 'test name',
      isActive: true,
      externalId: 'external test id',
      comments: "Test comments",
      employees: [
        {
          id: 'test id',
          isAssigned: true,
          employeeName: 'test employee name',
        },
      ],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedResult);
  });
});
