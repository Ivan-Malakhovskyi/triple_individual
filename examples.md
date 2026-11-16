```jsx
<Routes>
  <Route
    path="/"
    element={
      <>
        <AppBar />
        <HomePage />
      </>
    }
  />
  <Route path="/about" element={<About />} />
  <Route path="/products" element={<Products />} />
  <Route path="*" element={<NotFoundPage />} />
  <HomePage />
</Routes>
```

```jsx
<NavLink to="/" className={({ isActive }) => (isActive ? styles.active : null)}>
  Home
</NavLink>
```

```jsx
<Route path="/products/:productsId" element={<ProductPage />} />
```

ADD useParams() in item element

```jsx
<Route path="/about" element={<About />}>
  <Route path="mission" element={<div>Mission</div>} />
  <Route path="team" element={<div>Team</div>} />
  <Route path="reviews" element={<div>Reviews</div>} />
  <Route />
</Route>

      <Outlet /> in About.jsx
```

```jsx
export const SharedLayout = () => {
  return (
    <div className="box">
      <AppBar />
      <main>
        <section style={{ paddingTop: "40px" }}>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
```

```jsx
<Routes>
  <Route path="/" element={<SharedLayout />}>
    <Route index element={<HomePage />} />

    <Route path="about" element={<About />}>
      <Route path="mission" element={<div>Mission</div>} />
      <Route path="team" element={<div>Team</div>} />
      <Route path="reviews" element={<div>Reviews</div>} />
      <Route />
    </Route>
    <Route path="products" element={<Products />} />
    <Route
      path="products/:productId/selected/:item"
      element={<ProductPage />}
    />
    <Route path="*" element={<NotFoundPage />} />
  </Route>
</Routes>
```
