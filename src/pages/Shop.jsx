import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';
import { fetchProducts, fetchCategories } from '../services/api.js';
import { Filter, SlidersHorizontal, Search, RefreshCw } from 'lucide-react';

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryQuery = searchParams.get('category') || 'all';
  const searchQueryParam = searchParams.get('search') || '';

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedCategory, setSelectedCategory] = useState(categoryQuery);
  const [searchQuery, setSearchQuery] = useState(searchQueryParam);
  const [priceRange, setPriceRange] = useState(400);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    async function loadCategories() {
      const cats = await fetchCategories();
      setCategories(cats);
    }
    loadCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(searchParams.get('category') || 'all');
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    async function loadProducts() {
      setLoading(true);
      const data = await fetchProducts({
        category: selectedCategory,
        query: searchQuery,
        maxPrice: priceRange
      });

      // Apply sorting logic
      let sorted = [...data];
      if (sortBy === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
      } else if (sortBy === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
      } else if (sortBy === 'rating') {
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      }

      setProducts(sorted);
      setLoading(false);
    }
    loadProducts();
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const handleCategoryChange = (catSlug) => {
    setSelectedCategory(catSlug);
    const params = new URLSearchParams(searchParams);
    if (catSlug === 'all') params.delete('category');
    else params.set('category', catSlug);
    setSearchParams(params);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    const params = new URLSearchParams(searchParams);
    if (!e.target.value) params.delete('search');
    else params.set('search', e.target.value);
    setSearchParams(params);
  };

  const resetFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange(400);
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <div className="shop-page" style={{ paddingBottom: '100px' }}>
      {/* Page Header */}
      <div style={{
        backgroundColor: 'var(--color-black)',
        color: 'var(--color-ivory)',
        padding: '60px 0 50px',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="eyebrow" style={{ color: 'var(--color-champagne-light)' }}>
            The Complete Atelier Collection
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(36px, 5vw, 56px)',
            color: 'var(--color-ivory)',
            marginBottom: '14px'
          }}>
            Lunel Collections
          </h1>
          <p style={{
            fontSize: '15px',
            color: 'rgba(253, 251, 247, 0.7)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Explore our artisanal lineup of French Chantilly lace bras, silk loungewear, embroidered bodysuits, and delicate lingerie sets.
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingTop: '50px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: '40px',
          alignItems: 'start'
        }} className="shop-grid">

          {/* Sidebar Filters */}
          <aside style={{
            backgroundColor: 'var(--color-white)',
            border: '1px solid var(--color-border)',
            padding: '28px',
            position: 'sticky',
            top: '100px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              paddingBottom: '12px',
              borderBottom: '1px solid var(--color-border)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Filter size={18} color="var(--color-champagne)" />
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '20px' }}>Filters</h3>
              </div>
              <button
                onClick={resetFilters}
                style={{ fontSize: '11px', color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}
              >
                <RefreshCw size={12} /> Reset
              </button>
            </div>

            {/* Search Input */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: '600',
                display: 'block',
                marginBottom: '10px'
              }}>
                Search
              </label>
              <div style={{ position: 'relative' }}>
                <input
                  type="text"
                  placeholder="Filter by name..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 34px',
                    border: '1px solid var(--color-border)',
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)'
                  }}
                />
                <Search size={15} color="var(--color-muted)" style={{ position: 'absolute', left: '10px', top: '12px' }} />
              </div>
            </div>

            {/* Category Filter */}
            <div style={{ marginBottom: '28px' }}>
              <label style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                fontWeight: '600',
                display: 'block',
                marginBottom: '12px'
              }}>
                Categories
              </label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  onClick={() => handleCategoryChange('all')}
                  style={{
                    textAlign: 'left',
                    fontSize: '13px',
                    padding: '6px 10px',
                    backgroundColor: selectedCategory === 'all' ? 'var(--color-black)' : 'transparent',
                    color: selectedCategory === 'all' ? 'var(--color-ivory)' : 'var(--color-black)',
                    transition: 'all 0.2s'
                  }}
                >
                  All Categories
                </button>
                {categories.map((c) => (
                  <button
                    key={c.id || c.slug}
                    onClick={() => handleCategoryChange(c.slug)}
                    style={{
                      textAlign: 'left',
                      fontSize: '13px',
                      padding: '6px 10px',
                      backgroundColor: selectedCategory === c.slug ? 'var(--color-black)' : 'transparent',
                      color: selectedCategory === c.slug ? 'var(--color-ivory)' : 'var(--color-black)',
                      transition: 'all 0.2s'
                    }}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '13px' }}>
                <label style={{ fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: '600' }}>
                  Max Price
                </label>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: '600' }}>${priceRange}</span>
              </div>
              <input
                type="range"
                min="50"
                max="400"
                step="10"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--color-champagne)' }}
              />
            </div>
          </aside>

          {/* Main Products Display */}
          <main>
            {/* Top Bar Sort & Count */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: 'var(--color-white)',
              border: '1px solid var(--color-border)',
              padding: '16px 24px',
              marginBottom: '30px',
              flexWrap: 'wrap',
              gap: '16px'
            }}>
              <span style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
                Showing <strong>{products.length}</strong> products
              </span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <SlidersHorizontal size={16} color="var(--color-champagne)" />
                <span style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sort By:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  style={{
                    padding: '8px 12px',
                    border: '1px solid var(--color-border)',
                    fontSize: '13px',
                    fontFamily: 'var(--font-body)',
                    outline: 'none',
                    backgroundColor: 'var(--color-ivory)',
                    cursor: 'pointer'
                  }}
                >
                  <option value="featured">Featured First</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Grid */}
            {loading ? (
              <div style={{ textAlign: 'center', padding: '80px 0', color: 'var(--color-muted)' }}>
                Loading boutique items...
              </div>
            ) : products.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '80px 24px',
                backgroundColor: 'var(--color-white)',
                border: '1px solid var(--color-border)'
              }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', marginBottom: '12px' }}>
                  No Products Found
                </h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '14px', marginBottom: '24px' }}>
                  We couldn't find any products matching your selected search or filter criteria.
                </p>
                <button onClick={resetFilters} className="btn btn-primary">
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                gap: '28px'
              }}>
                {products.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      <style>{`
        @media (max-width: 850px) {
          .shop-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
