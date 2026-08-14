import '@testing-library/jest-dom';

// main.tsx mounts on import, so each test resets the module registry and
// re-imports it against a freshly prepared document.
//
// `act` comes from React itself, imported INSIDE the test after the reset.
// resetModules hands main.tsx a new copy of React, and an `act` from the old
// copy would flush a queue that module is no longer using — the render would
// never appear. Testing Library's `act` cannot be used here either: importing
// that module registers beforeAll/afterEach hooks, which Jest forbids once a
// test is running.
describe('main', () => {
  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '';
    (globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true;
  });

  it('mounts the app into #root', async () => {
    const root = document.createElement('div');
    root.id = 'root';
    document.body.appendChild(root);

    const { act } = await import('react');
    await act(async () => {
      await import('./main');
    });

    expect(root.querySelector('h1')).toHaveTextContent(
      'at1234-sectionb-2026-stpeterdemo-levlimit-fe',
    );
  });

  it('refuses to mount when #root is missing', async () => {
    await expect(import('./main')).rejects.toThrow('No #root element');
  });
});
