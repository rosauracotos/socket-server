import { Router, Request, Response} from "express";

const router = Router();

router.get('/mensajes', (req:Request, res: Response)=> {

    res.json({
        ok:true,
        mensaje: 'Todo esta bien!!'
    });
});

router.post('/mensajes', (req:Request, res: Response)=> {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const gente =  req.body.gente;



    res.json({
        ok:true,
        cuerpo,
        de,
        gente
    });
});


router.post('/mensajes/:id', (req:Request, res: Response)=> {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;
    const gente =  req.body.gente;
    const id = req.params.id;

    res.json({
        ok:true,
        cuerpo,
        de,
        gente,
        id
    });
});

export default router;