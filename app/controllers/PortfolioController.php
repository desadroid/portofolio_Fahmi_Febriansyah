<?php
/**
 * PortfolioController.php
 * Controller — Serves the public-facing portfolio page.
 */
class PortfolioController
{
    private PortfolioModel $model;

    public function __construct(PortfolioModel $model)
    {
        $this->model = $model;
    }

    /**
     * Render the public portfolio page.
     */
    public function index(): void
    {
        $data = $this->model->getData();
        require_once __DIR__ . '/../views/portfolio.php';
    }
}
