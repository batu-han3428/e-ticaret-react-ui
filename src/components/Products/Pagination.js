import * as React from 'react';

const Pagination = () => {
    return (
        <div className="row mt-3 border-3 border-bottom" id="paginationSatir">
            <div className="col-md-12 p-3">
                <ul className="pagination justify-content-center">
                    <li className="page-item disabled">
                        <a className="page-link" href="/#">
                            <span>&laquo;</span>
                        </a>
                    </li>
                    <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                    <li className="page-item"><a className="page-link" href="/#">2</a></li>
                    <li className="page-item"><a className="page-link" href="/#">3</a></li>
                    <li className="page-item"><a className="page-link" href="/#">4</a></li>
                    <li className="page-item"><a className="page-link" href="/#">5</a></li>
                    <li className="page-item">
                        <a className="page-link" href="/#">
                            <span>&raquo;</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        )
}

export default Pagination