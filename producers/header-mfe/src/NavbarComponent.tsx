import { useEffect } from 'react';
import { Product } from './models/products';
import { useCartContext } from './CartContext';

export default function NavbarComponent() {
  const { products, addToCart } = useCartContext();

  const handleCardSelected = (data: Product) => {
    addToCart(data);
  };

  useEffect(() => {
    (window as any).eventBus.subscribe('ADD_PRODUCT_CART', handleCardSelected);
    return () => {
      (window as any).eventBus.unsubscribe(
        'ADD_PRODUCT_CART',
        handleCardSelected,
      );
    };
  }, []);

  return (
    <div className="container mx-auto p-1 lg:p-4 mb-4">
      <div className="navbar bg-base-100 drop-shadow rounded-md">
        <div className="flex-1">
          <a className="btn btn-link text-xl no-underline hover:no-underline text-current">
            <svg
              viewBox="0 0 24 24"
              className="h-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {' '}
                <path
                  opacity="0.5"
                  d="M2.08368 2.7512C2.22106 2.36044 2.64921 2.15503 3.03998 2.29242L3.34138 2.39838C3.95791 2.61511 4.48154 2.79919 4.89363 3.00139C5.33426 3.21759 5.71211 3.48393 5.99629 3.89979C6.27827 4.31243 6.39468 4.76515 6.44841 5.26153C6.47247 5.48373 6.48515 5.72967 6.49184 6H17.1301C18.815 6 20.3318 6 20.7757 6.57708C21.2197 7.15417 21.0461 8.02369 20.699 9.76275L20.1992 12.1875C19.8841 13.7164 19.7266 14.4808 19.1748 14.9304C18.6231 15.38 17.8426 15.38 16.2816 15.38H10.9787C8.18979 15.38 6.79534 15.38 5.92894 14.4662C5.06254 13.5523 4.9993 12.5816 4.9993 9.64L4.9993 7.03832C4.9993 6.29837 4.99828 5.80316 4.95712 5.42295C4.91779 5.0596 4.84809 4.87818 4.75783 4.74609C4.66977 4.61723 4.5361 4.4968 4.23288 4.34802C3.91003 4.18961 3.47128 4.03406 2.80367 3.79934L2.54246 3.7075C2.1517 3.57012 1.94629 3.14197 2.08368 2.7512Z"
                  fill="#17a127"
                ></path>{' '}
                <path
                  d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                  fill="#17a127"
                ></path>{' '}
                <path
                  d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                  fill="#17a127"
                ></path>{' '}
                <path
                  d="M15.5421 9.51724C15.8278 9.2173 15.8162 8.74256 15.5163 8.4569C15.2163 8.17123 14.7416 8.18281 14.4559 8.48276L12.1419 10.9125L11.5421 10.2828C11.2565 9.98281 10.7817 9.97123 10.4818 10.2569C10.1818 10.5426 10.1703 11.0173 10.4559 11.3172L11.5988 12.5172C11.7403 12.6659 11.9366 12.75 12.1419 12.75C12.3471 12.75 12.5434 12.6659 12.685 12.5172L15.5421 9.51724Z"
                  fill="#17a127"
                ></path>{' '}
              </g>
            </svg>
            NatyShop
            <span> aaa </span>
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">
                  {products.length} 8 Items
                </span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User picture profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile<span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
